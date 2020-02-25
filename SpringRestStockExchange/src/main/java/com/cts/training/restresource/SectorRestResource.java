package com.cts.training.restresource;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.cts.training.model.Sector;

@RepositoryRestResource(path="sector", collectionResourceRel="sector")
public interface SectorRestResource extends PagingAndSortingRepository<Sector, Integer>
{

}
