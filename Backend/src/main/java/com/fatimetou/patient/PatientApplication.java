package com.fatimetou.patient;

import com.fatimetou.patient.entities.Medecin;
import com.fatimetou.patient.entities.Patient;
import com.fatimetou.patient.entities.Receptionniste;
import com.fatimetou.patient.entities.User;
import com.fatimetou.patient.enums.Role;
import com.fatimetou.patient.repositories.MedecinRepository;
import com.fatimetou.patient.repositories.PatientRepository;
import com.fatimetou.patient.repositories.ReceptionnisteRepository;
import com.fatimetou.patient.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Date;

@SpringBootApplication
public class PatientApplication {

	public static void main(String[] args) {
		SpringApplication.run(PatientApplication.class, args);

	}

	@Bean
	CommandLineRunner commandLineRunner(UserRepository userRepository,
			MedecinRepository medecinRepository,
			ReceptionnisteRepository receptionnisteRepository,
			PasswordEncoder passwordEncoder) {
		return args -> {
			User user = userRepository.findByEmail("medecin@gmail.com").orElse(null);
			if (user == null) {
				User user1 = User.builder()
						.name("Mohamed Vall")
						.role(Role.MEDECIN)
						.email("medecin@gmail.com")
						.password(passwordEncoder.encode("12345"))
						.build();
				medecinRepository.save(Medecin.builder()
						.user(user1)
						.prenom("medecin prenom")
						.genre("homme")
						.build());
			}
			User userTwo = userRepository.findByEmail("receptionniste@gmail.com").orElse(null);
			if (userTwo == null) {
				User user2 = User.builder()
						.name("Receptioniste")
						.role(Role.RECEPTIONNISTE)
						.email("receptionniste@gmail.com")
						.password(passwordEncoder.encode("12345"))
						.build();
				receptionnisteRepository.save(Receptionniste.builder()
						.user(user2)
						.build());
			}
		};
	}
}
