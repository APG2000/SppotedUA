package com.apg200.SppotedUA.controllers;


import com.apg200.SppotedUA.dtos.UserDto;
import com.apg200.SppotedUA.entities.UserEntity;
import com.apg200.SppotedUA.mappers.imp.UserMapperImp;
import com.apg200.SppotedUA.servicies.imp.UserServiceImp;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;   
import java.util.ArrayList;
import java.util.List;

@RestController
@Log4j2
@RequestMapping("/api")
public class UserController {

    @Autowired
    private  UserServiceImp userServiceImp;
    @Autowired
    private UserMapperImp userMapperImp;

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
