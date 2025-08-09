package com.apg200.SppotedUA.dtos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Setter
@Getter
public class UserDto {
    private String name;
    private String anonymousName;
    @JsonIgnore
    private String id;
    private String email;

    private String password;
    private String genero;
    private String dataNascimento;
    private String curso;
    private String altura;
    private String nacionalidade;
}
