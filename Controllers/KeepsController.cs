using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Keepr.Models;
using Keepr.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Keepr.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class KeepsController : ControllerBase
    {
        private readonly KeepsService _ks;
        private readonly VaultKeepsService _vks;

        public KeepsController(KeepsService ks, VaultKeepsService vks)
        {
            _ks = ks;
            _vks = vks;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Keep>> Get()
        {
            try
            {
                return Ok(_ks.Get());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            };
        }

        [HttpGet("{keepId}")]
        public ActionResult<Keep> GetById(int keepId)
        {
            try
            {
                return Ok(_ks.GetById(keepId));
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }



        [HttpGet("user")]
        public ActionResult<IEnumerable<Keep>> GetByUserId(int userId)
        {
            try
            {
                return Ok(_ks.GetByUserId(userId));
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }

        [HttpGet("user" + "/{vaultId}")]
        public ActionResult<IEnumerable<VaultKeepViewModel>> GetKeepsByVaultId(int vaultId, string UserId)
        {
            try
            {
                Claim getUserId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
                string userId = getUserId.Value;
                return Ok(_vks.GetKeepsByVaultId(vaultId, userId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [HttpPost]
        [Authorize]
        public ActionResult<Keep> Post([FromBody] Keep newKeep)
        {
            try
            {
                Claim userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
                newKeep.UserId = userId.Value;
                return Ok(_ks.Create(newKeep));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize]
        public ActionResult<Keep> Delete(int id)
        {
            try
            {
                return Ok(_ks.Delete(id));
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }

    }
}