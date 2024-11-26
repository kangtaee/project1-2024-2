package com.sg.leo.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.sg.leo.domain.User;

@org.springframework.web.bind.annotation.RestController
public class RestController {
	
	@GetMapping("/jblog")
	public User httpGet() {
		User finduser = User.builder().id(1).username("ai").password("222").email("a@b.c").build();
				return finduser;
		
	}
	//Post는 요청을 변경
	@PostMapping("/jblog")
	public String httpPost(@RequestBody User user) {
		return "Post 요청처리" + user.toString();
	}
	//요청을 추가
	@PutMapping("/jblog")
	public String httpput() {
		return "Put 요청처리";
	}
	//Delete는 삭제
	@DeleteMapping("/jblog")
	public String httpDel() {
		return "Delete 요청처리";
	}
}
