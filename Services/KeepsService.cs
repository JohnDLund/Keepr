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



        public Keep Edit(Keep newKeep)
        {
            Keep original = GetById(newKeep.Id);
            original.Name = newKeep.Name == null ? original.Name : newKeep.Name;
            original.Description = newKeep.Description == null ? original.Description : newKeep.Description;
            original.Img = newKeep.Img == null ? original.Img : newKeep.Img;
            original.IsPrivate = newKeep.IsPrivate;
            original.Views = newKeep.Views == 0 ? original.Views : newKeep.Views;
            original.Shares = newKeep.Shares == 0 ? original.Shares : newKeep.Shares;
            original.Keeps = newKeep.Keeps == 0 ? original.Keeps : newKeep.Keeps;
            return _repo.Edit(original);
        }
    }
}

