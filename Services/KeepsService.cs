using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class KeepsService
  {
    private readonly KeepsRepository _repo;
    public KeepsService(KeepsRepository repo)
    {
      _repo = repo;
    }
    public IEnumerable<Keep> Get()
    {
      return _repo.Get();
    }



    public Keep GetById(int keepId)
    {
      Keep exists = _repo.GetById(keepId);
      if (exists == null) { throw new Exception("Invalid keep"); }
      return exists;
    }

    public IEnumerable<Keep> GetByUserId(int user)
    {
      IEnumerable<Keep> exists = _repo.GetByUserId(user);
      if (exists == null) { throw new Exception("No Keep Exists"); }
      return exists;
    }


    public Keep Create(Keep newKeep)
    {
      int id = _repo.Create(newKeep);
      newKeep.Id = id;
      return newKeep;
    }
    public Keep Delete(int id)
    {
      Keep exists = GetById(id);
      _repo.Delete(id);
      return exists;
    }
  }
}

