package com.cricket.api.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CrossConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		
		//setting all URL paths here at once
		
		//CrossOrigin for root-path --> all sub paths are allowed
		registry.addMapping("/**").allowedOrigins("http://localhost:4200");
				
		//CrossOrigin for /live path
		registry.addMapping("/live/**").allowedOrigins("http://localhost:4200");
		
		//CrossOrigin for /live path
		registry.addMapping("/point-table/**").allowedOrigins("http://localhost:4200");
	}
}