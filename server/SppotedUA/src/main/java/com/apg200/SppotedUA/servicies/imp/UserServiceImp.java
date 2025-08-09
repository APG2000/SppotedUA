package com.apg200.SppotedUA.servicies.imp;

import com.apg200.SppotedUA.dtos.UserDto;
import com.apg200.SppotedUA.entities.UserEntity;
import com.apg200.SppotedUA.mappers.imp.UserMapperImp;
import com.apg200.SppotedUA.repositories.userRepository;
import com.apg200.SppotedUA.servicies.UserService;
import lombok.extern.log4j.Log4j;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.rmi.server.LogStream.log;


@Service
@Log4j2
public class UserServiceImp implements UserService {

    @Autowired
    private userRepository userRepository;
    @Autowired
    private UserMapperImp userMapperImp;
    @Override
    public UserEntity registerUSer(UserDto userDto) {
        try{
            UserEntity userEntity = userMapperImp.mapToEntity(userDto);
            UserEntity saved= userRepository.save(userEntity);
            return saved;

        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }
    }

    @Override
    public List<UserEntity> getAllUsers() {
        return  userRepository.findAll();
    }
}
