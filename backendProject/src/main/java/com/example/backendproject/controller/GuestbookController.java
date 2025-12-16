package com.example.backendproject.controller;

import com.example.backendproject.domain.Guestbook;
import com.example.backendproject.repository.GuestbookRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/guestbooks")
//@CrossOrigin(origins = "http://localhost:3000") // 프론트 포트
public class GuestbookController {

    private final GuestbookRepository repository;

    public GuestbookController(GuestbookRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Guestbook> findAll() {
        return repository.findAll();
    }

    @PostMapping
    public Guestbook create(@RequestBody Guestbook guestbook) {
        return repository.save(guestbook);
    }
}
