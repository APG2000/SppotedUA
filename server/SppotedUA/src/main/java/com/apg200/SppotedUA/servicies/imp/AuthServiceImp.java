package com.apg200.SppotedUA.servicies.imp;

import com.apg200.SppotedUA.dtos.UserDto;
import com.apg200.SppotedUA.entities.UserEntity;
import com.apg200.SppotedUA.mappers.imp.UserMapperImp;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


@Slf4j
@Service
public class AuthServiceImp implements UserDetailsService {
    @Autowired
    private UserServiceImp userServiceImp;
    @Autowired
    private UserMapperImp userMapperImp;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = userServiceImp.getUserByName(username);
        if (user!=null) {
            return user;
        }else {
            throw new UsernameNotFoundException("Invalid username");
        }
    }

    public UserDetails registerUser(UserDto userDto) throws AuthenticationException {

        UserEntity user = userServiceImp.getUserByName(userDto.getName());
        if (user==null) {

            String encryptedPassword = new BCryptPasswordEncoder().encode(userDto.getPassword());
            userDto.setPassword(encryptedPassword);

            return userServiceImp.registerUSer(userDto);
        }else{
            log.info("Já existe um user com esse userName");
           return null;
        }

    }
}
