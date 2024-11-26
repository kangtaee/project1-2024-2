package com.sg.leo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/")


public class RestPractice {
	
	@RequestMapping("/hello")
	public String hello() {
		return "/hello Response, from Spring RestPractice 11월14일";
	}
	
	@GetMapping("/get")
	public String get() {
		return "/get Response, from Spring RestPractice 11월14일";
	}
	
	@GetMapping("/getchk/{variable}")
	public String gethk(@PathVariable String variable) {
		return "/getchk Response, 11월14일" + "variable=" + variable;
	}
	
	@GetMapping("/getparam")
	public String getparam(String name, String email) {
		return "/getparam name = " + name + ", email=" + email;
	}

}
//https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=7d96bc5108f52b80e2d9075a369b9f35

