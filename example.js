var string1 = "";

for (var j = 0; j < 8; j++)
{
    for(var i = 0; i < 4; i++)
    {
        if (j % 2 == 0)
        {
            string1 = string1 + "# "
        }
        else
        {
            string1 = string1 + " #"
        }
    }
    string1 = string1 + "\n"
}

console.log(string1);