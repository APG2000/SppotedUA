package com.apg200.SppotedUA.servicies;


import com.apg200.SppotedUA.dtos.UserDto;
import com.apg200.SppotedUA.entities.UserEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    UserEntity registerUSer(UserDto userDto);
    List<UserEntity> getAllUsers();
    UserEntity getUserByName(String name);
}
