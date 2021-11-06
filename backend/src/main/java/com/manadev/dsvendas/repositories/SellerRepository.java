package com.manadev.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manadev.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {
}
