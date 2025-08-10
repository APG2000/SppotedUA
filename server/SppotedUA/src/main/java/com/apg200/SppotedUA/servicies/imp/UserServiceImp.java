package com.apg200.SppotedUA.servicies.imp;

import com.apg200.SppotedUA.dtos.UserDto;
import com.apg200.SppotedUA.entities.UserEntity;
import com.apg200.SppotedUA.mappers.imp.UserMapperImp;
import com.apg200.SppotedUA.repositories.UserRepository;
import com.apg200.SppotedUA.servicies.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
@Log4j2
public class UserServiceImp implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserMapperImp userMapperImp;
    @Override
    public UserEntity registerUSer(UserDto userDto) {
        try{
            UserEntity userEntity = userMapperImp.mapToEntity(userDto);
            return userRepository.save(userEntity);

        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }
    }

    @Override
    public List<UserEntity> getAllUsers() {
        return  userRepository.findAll();
    }

    @Override
    public UserEntity getUserByName(String name) {
        return  userRepository.findByName(name);
    }
}
