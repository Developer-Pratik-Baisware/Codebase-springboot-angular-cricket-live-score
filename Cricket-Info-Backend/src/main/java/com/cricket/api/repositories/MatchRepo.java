package com.cricket.api.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cricket.api.dto.Match;

public interface MatchRepo extends JpaRepository<Match, Integer>{

	// to fetch match using team name -- teamHeading field
	Optional<Match> findByTeamHeading(String teamHeading);
}
