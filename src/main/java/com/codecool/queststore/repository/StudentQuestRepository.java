package com.codecool.queststore.repository;

import com.codecool.queststore.model.StudentQuest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentQuestRepository extends JpaRepository<StudentQuest, Long> {
    List<StudentQuest> findByStudentId(Long id);
}