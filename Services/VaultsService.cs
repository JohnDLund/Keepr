using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
    public class VaultsService
    {
        private readonly VaultsRepository _repo;
        public VaultsService(VaultsRepository repo)
        {
            _repo = repo;
        }
        public IEnumerable<Vault> Get()
        {
            return _repo.Get();
        }



        public Vault GetById(int keepId)
        {
            Vault exists = _repo.GetById(keepId);
            if (exists == null) { throw new Exception("Invalid keep"); }
            return exists;
        }

        public IEnumerable<Vault> GetByUserId(int user)
        {
            IEnumerable<Vault> exists = _repo.GetByUserId(user);
            if (exists == null) { throw new Exception("No Vault Exists"); }
            return exists;
        }


        public Vault Create(Vault newVault)
        {
            int id = _repo.Create(newVault);
            newVault.Id = id;
            return newVault;
        }
        public Vault Delete(int id)
        {
            Vault exists = GetById(id);
            _repo.Delete(id);
            return exists;
        }
    }
}

