package com.spring.tag;

import com.spring.query.Query;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "CQ_TAGS")
@Data
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false)
    private Integer id;

    private String name;

    @ManyToMany
    @JoinTable(name = "CQ_QUERIES_TAGS",
            joinColumns = @JoinColumn(name = "tag_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "query_id",
                    referencedColumnName = "name"))
    private List<Query> queries;

}


