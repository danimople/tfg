package com.tfg.trabajofg.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import javax.persistence.*;

@Entity
@Table(name="usuarios")
@ToString @EqualsAndHashCode
public class Usuario {

        @Getter @Setter @Id
        @Column(name= "id")
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        @Getter @Setter @Column(name= "email")
        private  String email;
        @Getter @Setter @Column(name= "password")
        private  String password;

}
