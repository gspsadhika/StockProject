package com.cts.training.userservice;

import org.springframework.data.jpa.repository.JpaRepository;


public interface RegisterRepo extends JpaRepository<Register, Integer>
{
	Register findByEmail(String email);
	Register findByUsernameAndPassword(String username, String password);
}
