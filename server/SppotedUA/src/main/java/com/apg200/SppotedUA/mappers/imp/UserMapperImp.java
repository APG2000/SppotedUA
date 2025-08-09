package com.apg200.SppotedUA.mappers.imp;

import com.apg200.SppotedUA.dtos.UserDto;
import com.apg200.SppotedUA.entities.UserEntity;
import com.apg200.SppotedUA.mappers.Mapper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Map;
@Component
public class UserMapperImp implements Mapper<UserEntity, UserDto> {

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public UserDto mapToDto(UserEntity userEntity) {
        return modelMapper.map(userEntity,UserDto.class);
    }

    @Override
    public UserEntity mapToEntity(UserDto userDto) {
        return modelMapper.map(userDto,UserEntity.class);
    }
}
