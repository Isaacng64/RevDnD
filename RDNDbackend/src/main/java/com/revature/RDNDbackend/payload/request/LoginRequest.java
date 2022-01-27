package com.revature.RDNDbackend.payload.request;

import javax.validation.constraints.NotBlank;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Data
@Setter
@Getter
public class LoginRequest {
	@NotBlank
	private String username;

	@NotBlank
	private String password;

}
