package com.cricket.api.service;

import java.util.List;
import java.util.Map;

import com.cricket.api.dto.Match;

public interface MatchService {

	//get all match
	List<Match> getAllMatches();
	
	// get live match
	List<Match> getLiveMatches();
	
	//get World Cup point table
	List<List<String>> getPointTable();
}
