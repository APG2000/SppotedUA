package com.apg200.SppotedUA.repositories;


import com.apg200.SppotedUA.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity,String> {
    UserEntity findByName(String userName);
    UserEntity findByEmail(String email);
}
