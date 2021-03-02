package com.spring.query;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "query", path = "query")
public interface QueryRepository extends PagingAndSortingRepository<Query, String> {
    List<Query> findByName(@Param("name") String name);
}

