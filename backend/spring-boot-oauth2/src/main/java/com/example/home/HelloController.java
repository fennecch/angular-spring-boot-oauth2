package com.example.home;

import java.security.Principal;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author fennec
 *
 */
@RestController
public class HelloController {
    
    @GetMapping("/hello")
    public String hello(Principal principal) {
        return String.format("hello %s !!!", principal.getName());
    }
    
}
