package com.manadev.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manadev.dsvendas.dto.SellerDTO;
import com.manadev.dsvendas.servicies.SellerService;

@RestController
@RequestMapping("/sellers")
public class SellerController {

	@Autowired
	private SellerService service;

	@GetMapping
	public ResponseEntity<List<SellerDTO>> findAll() {
		List<SellerDTO> list = service.findAll();
		return ResponseEntity.ok(list);
	}
}
