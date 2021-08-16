package com.employee.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	// allow CORS Access for different domains
	/**
	 * @Bean public CorsFilter corsFilter() { CorsConfiguration corsConfiguration =
	 *       new CorsConfiguration(); corsConfiguration.setAllowCredentials(true);
	 *       corsConfiguration.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
	 *       corsConfiguration.setAllowedHeaders(Arrays.asList("Origin",
	 *       "Access-Control-Allow-Origin", "Content-Type", "Accept",
	 *       "Authorization", "Origin, Accept", "X-Requested-With",
	 *       "Access-Control-Request-Method", "Access-Control-Request-Headers"));
	 *       corsConfiguration.setExposedHeaders(Arrays.asList("Origin",
	 *       "Content-Type", "Accept", "Authorization",
	 *       "Access-Control-Allow-Origin", "Access-Control-Allow-Origin",
	 *       "Access-Control-Allow-Credentials"));
	 *       corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT",
	 *       "DELETE", "OPTIONS")); UrlBasedCorsConfigurationSource
	 *       urlBasedCorsConfigurationSource = new
	 *       UrlBasedCorsConfigurationSource();
	 *       urlBasedCorsConfigurationSource.registerCorsConfiguration("/**",
	 *       corsConfiguration); return new
	 *       CorsFilter(urlBasedCorsConfigurationSource); }
	 *
	 */

	@CrossOrigin
	@Configuration
	public class RestConfiguration {

		@Bean
		public FilterRegistrationBean corsFilter() {

			UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
			CorsConfiguration config = new CorsConfiguration();
			config.setAllowCredentials(true);
			// config.addAllowedOrigin("*");
			config.addAllowedOriginPattern("*");
			config.addAllowedHeader("*");
			config.addAllowedMethod("OPTIONS");
			config.addAllowedMethod("GET");
			config.addAllowedMethod("PUT");
			config.addAllowedMethod("POST");
			config.addAllowedMethod("DELETE");
			config.addAllowedMethod("PATCH");

			source.registerCorsConfiguration("/**", config);
			final FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
			bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
			return bean;
		}
	}
}
