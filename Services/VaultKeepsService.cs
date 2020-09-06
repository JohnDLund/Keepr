using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
    public class VaultKeepsService
    {
        private readonly VaultKeepsRepository _repo;
        public VaultKeepsService(VaultKeepsRepository repo)
        {
            _repo = repo;
        }




        public IEnumerable<VaultKeep> Get()
        {
            return _repo.Get();
        }


        internal IEnumerable<VaultKeepViewModel> GetKeepsByVaultId(int vaultId, string userId)
        {
            return _repo.GetKeepsByVaultId(vaultId, userId);
        }

        public VaultKeep GetById(int vaultKeepId)
        {
            VaultKeep exists = _repo.GetById(vaultKeepId);
            if (exists == null) { throw new Exception("Invalid VaultKeep"); }
            return exists;
        }


        public VaultKeep Create(VaultKeep newVaultKeep)
        {
            int id = _repo.Create(newVaultKeep);
            newVaultKeep.Id = id;
            return newVaultKeep;
        }

        public VaultKeep Delete(int id)
        {
            VaultKeep exists = GetById(id);
            _repo.Delete(id);
            return exists;
        }
    }
}

