package com.cts.training.userservice;

import java.util.List;


public interface RegisterService {
    public Register addUser(Register user);
    public void deleteUser(int id);
    public Register updateUser(Register user);
    public List<Register> getAllUsers();
    public Register getUserById(int id);
    public String activate(String email);
    public Register findByUsernameAndPassword(String username,String password);
}


