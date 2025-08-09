package com.apg200.SppotedUA.repositories;


import com.apg200.SppotedUA.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository<UserEntity,String> {
}
