package com.example.backendproject.repository;

import com.example.backendproject.domain.Guestbook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuestbookRepository extends JpaRepository<Guestbook,Long> {

}
