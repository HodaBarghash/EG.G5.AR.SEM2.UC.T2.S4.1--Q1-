function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6nGjlDSIwxS":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyUxWCIh1qJK6otT6YlfZgu8AhFnHnzE3Rfw5UKwYF4Nqwhhm8Vz70rsinxVtm_q71vXQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

