package com.revature.RDNDbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import org.springframework.boot.autoconfigure.*;

@Configuration
@ComponentScan
@EnableAutoConfiguration
@SpringBootApplication
public class RdnDbackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(RdnDbackendApplication.class, args);
    }

}
