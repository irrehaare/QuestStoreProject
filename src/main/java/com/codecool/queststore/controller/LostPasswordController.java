package com.codecool.queststore.controller;

import com.codecool.queststore.exceptions.UserNotFoundException;
import com.codecool.queststore.model.User;
import com.codecool.queststore.service.PasswordGenerator;
import com.codecool.queststore.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Slf4j
@AllArgsConstructor
@Controller
@RequestMapping("/forgotten-password")
public class LostPasswordController {

    private final UserService userService;
    private final PasswordGenerator passwordGenerator;
    private final PasswordEncoder passwordEncoder;
    private static final int PASSWORD_LENGTH = 10;

    @GetMapping
    public String showForm() {
        return "login/forgotten_password";
    }

    @PostMapping
    public String resetPassword(@RequestParam("username") String username, Model model) {
        User user = null;
        try {
            user = userService.findByUsername(username);

        } catch (UserNotFoundException e) {
            log.info(String.format("There is no user with username '%s' in the database", username));
        }
        if (user != null) {
            String password = passwordGenerator.generateRandomPassword(PASSWORD_LENGTH);
            String hashedPassword = passwordEncoder.encode(password);
            user.setPassword(hashedPassword);
            userService.save(user);
            model.addAttribute("newPassword", password);
        }
        model.addAttribute("userExists", user != null);
        model.addAttribute("username", username);
        return "login/forgotten_password";
    }
}
