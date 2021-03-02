package com.spring.query;

import com.spring.tag.Tag;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "CQ_QUERIES")
@Data
public class Query {

    @Id
    private String name;

    private String description;
    private String databaseName;
    private String environment;


    @ManyToMany
    @JoinTable(name = "CQ_QUERIES_TAGS",
            joinColumns = @JoinColumn(name = "query_id", referencedColumnName = "name"),
            inverseJoinColumns = @JoinColumn(name = "tag_id", referencedColumnName = "id"))
    private List<Tag> tags;

}
