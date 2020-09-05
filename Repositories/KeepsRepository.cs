using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
    public class KeepsRepository
    {
        private readonly IDbConnection _db;

        public KeepsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal IEnumerable<Keep> Get()
        {
            string sql = "SELECT * FROM keeps WHERE isPrivate = 0;";
            return _db.Query<Keep>(sql);
        }


        internal Keep GetById(int keepId)
        {
            string sql = "SELECT * FROM keeps WHERE id = @keepId";
            return _db.QueryFirstOrDefault<Keep>(sql, new { keepId });
        }



        internal IEnumerable<Keep> GetByUserId(int userId)
        {
            string sql = "SELECT * FROM keeps WHERE userId = @userId";
            return _db.Query<Keep>(sql, new { userId });
        }




        internal int Create(Keep KeepData)
        {
            string sql = @"
        INSERT INTO keeps
        (name, description, userId, img, isPrivate, views, shares, keeps)
        VALUES
        (@Name, @Description, @UserId, @Img, @IsPrivate, @Views, @Shares, @Keeps);
        SELECT LAST_INSERT_ID();";
            return _db.ExecuteScalar<int>(sql, KeepData);
        }


        internal void Delete(int Id)
        {
            string sql = "DELETE FROM keeps WHERE id = @Id";
            _db.Execute(sql, new { Id });
        }


    }
}