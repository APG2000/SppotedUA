package com.apg200.SppotedUA.controllers.Auth;


import com.apg200.SppotedUA.config.security.TokenProvider;
import com.apg200.SppotedUA.dtos.UserDto;
import com.apg200.SppotedUA.entities.UserEntity;
import com.apg200.SppotedUA.mappers.imp.UserMapperImp;
import com.apg200.SppotedUA.servicies.imp.AuthServiceImp;
import com.apg200.SppotedUA.servicies.imp.UserServiceImp;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping(path = "/auth")
@Log4j2

public class AuthControler {

    @Autowired
    private UserServiceImp userServiceImp;
    @Autowired
    private UserMapperImp userMapperImp;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenProvider tokenService;
    @Autowired
    private AuthServiceImp authServiceImp;

    @PostMapping(path = "/register")
    public ResponseEntity<?> register(@RequestBody  UserDto userDto){



        UserDetails newUser = authServiceImp.registerUser(userDto) ;


        if (newUser == null) {

            return ResponseEntity.status(HttpStatus.CONFLICT).body("\"User already exists\"");
        }

        log.info("Sucessfully registered new user ");

        return ResponseEntity.status(HttpStatus.CREATED).body(null);

    }

    @PostMapping(path = "/loguin")
    public ResponseEntity<Map<String, Object>> loguin(@RequestParam String username, @RequestParam String password){
        System.out.println("asdasdasd");
        var authToken = new UsernamePasswordAuthenticationToken(username,password);


        Authentication authUser=authenticationManager.authenticate(authToken);

        String token = tokenService.generateAccessToken((UserEntity) authUser.getPrincipal());
        log.info("User X Sucessfully logged");

        return ResponseEntity.ok(Map.of("token", token, "username", username, "role", authUser.getAuthorities()));
    }


}

