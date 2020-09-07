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
  [Authorize]
  [Route("api/[controller]")]
  public class VaultsController : ControllerBase
  {
    private readonly VaultsService _vs;
    public VaultsController(VaultsService vs)
    {
      _vs = vs;
    }


    [HttpGet]
    public ActionResult<IEnumerable<Vault>> Get()
    {
      try
      {
        return Ok(_vs.Get());
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      };
    }


    [HttpGet("{vaultId}")]

    public ActionResult<Vault> GetById(int vaultId)
    {
      try
      {
        Claim user = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
        if (user.Value == null)
        {
          throw new Exception("You must be logged in to get vaults");
        }
        Vault foundVault = _vs.GetById(vaultId);
        if (foundVault.UserId != user.Value)
        {
          throw new Exception("can not get vaults that don't belong to you");
        }
        return Ok(foundVault);
      }
      catch (Exception exception)
      {
        return BadRequest(exception.Message);
      }
    }



    [HttpGet("user")]
    public ActionResult<IEnumerable<Vault>> GetByUserId(string userId)
    {
      try
      {
        Claim user = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
        if (user.Value == null)
        {
          throw new Exception("You must be logged in to get vaults");
        }
        return Ok(_vs.GetByUserId(userId));
      }
      catch (Exception exception)
      {
        return BadRequest(exception.Message);
      }
    }



    [HttpPost]
    public ActionResult<Vault> Post([FromBody] Vault newVault)
    {
      try
      {
        Claim userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
        newVault.UserId = userId.Value;
        return Ok(_vs.Create(newVault));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }



    [HttpDelete("{id}")]
    [Authorize]

    public ActionResult<Vault> Delete(int id)
    {
      try
      {
        return Ok(_vs.Delete(id));
      }
      catch (Exception exception)
      {
        return BadRequest(exception.Message);
      }
    }

  }
}