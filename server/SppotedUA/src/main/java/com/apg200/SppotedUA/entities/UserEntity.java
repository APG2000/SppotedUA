package com.apg200.SppotedUA.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter

@Table(name = "userBasicsDetails")
public class UserEntity {

    private String name;
    private String anonymousName;
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String email;

    private String password;
    private String genero;
    private String dataNascimento;
    private String curso;
    private String altura;
    private String nacionalidade;
}
