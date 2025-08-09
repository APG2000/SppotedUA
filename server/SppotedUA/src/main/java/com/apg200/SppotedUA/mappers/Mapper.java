package com.apg200.SppotedUA.mappers;

public interface Mapper<A,B> {
    B mapToDto(A a);
    A mapToEntity(B b);
}
