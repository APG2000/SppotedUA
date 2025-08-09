package com.apg200.SppotedUA.controllers;


import com.apg200.SppotedUA.dtos.UserDto;
import com.apg200.SppotedUA.entities.UserEntity;
import com.apg200.SppotedUA.mappers.imp.UserMapperImp;
import com.apg200.SppotedUA.servicies.imp.UserServiceImp;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@Log4j2
public class UserController {
    @Autowired
    private UserServiceImp userServiceImp;
    @Autowired
    private UserMapperImp userMapperImp;
    @PostMapping(path = "/register")
    public ResponseEntity<UserDto> registerUser(@RequestBody UserDto userDto){
        UserEntity saved = userServiceImp.registerUSer(userDto);

        if(saved != null){
            log.info("New User Created");
            return  new ResponseEntity<>(userDto,HttpStatus.CREATED);
        }else{
            log.error("Error on  Creacting new User ");

            return  new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }

    }
    @GetMapping(path = "/getAllUsers")
    public ResponseEntity<List<UserDto>> getAllUsers(){
        List<UserEntity> userEntities= userServiceImp.getAllUsers();
        List<UserDto> userDtos = new ArrayList<>();
        for (UserEntity e:userEntities){
            userDtos.add(userMapperImp.mapToDto(e));

        }
        return  new ResponseEntity<>(userDtos,HttpStatus.OK);
    }


}
