function d2h(d) {return Math.round(d).toString(16);}
function h2d(h) {return parseInt(h,16);}

function colorizejs(integer, max, spectrum)
{
  switch (spectrum) {
     case 'r2g':
        return colorizejsr2g(integer, max);
     case 'g2r':
        return colorizejsr2g((max-integer), max);
     case 'b2w':
        return colorizejsb2w(integer, max);
     case 'w2b':
        return colorizejsb2w((max-integer), max);
     case 'rnbw':
        return colorizejsrnbw(integer, max);
     default:
        return colorizejsr2g(integer, max);
  }
}

function colorizejsr2g(integer, max)
{
  var input = Math.round(integer / max * 1000);
  var hexcolor;
  var startR = 254;
  var startG = 1;
  var startB = 24;
  
  if(input<500)
    {
      startR -= input/3;
      startG = input/4;
    }
  else
    {
      startR = 88;
      startG += input/4.1+3;
    }
  hexcolor = 'rgb('+Math.round(startR)+', '+Math.round(startG)+', '+Math.round(startB)+')';
  return hexcolor;
}

function colorizejsrnbw(integer, max)
{
  var input = Math.round(integer / max * 833);
  var hexcolor;
  var startR = 168;
  var startG = 0;
  var startB = 255;

  if(input<166)
    {
      startR -= input/1;
      startG = input/2.8;
      startB -= input/6;
    }
  if((input>165)&&(input<334))
    {
      startR = 0+(input-166)/2.25;
      startG = 59+(input-166)/1.03;
      startB = 228+(input-166)/6.3;
    }
  if((input>333)&&(input<499))
    {
      startR = 75-(input-333)/2.3;
      startG = 223-(input-333)/14.5;
      startB = 255-(input-333)*1.3;
    }
  if((input>498)&&(input<667))
    {
      startR = 1+(input-498)*1.5;
      startG = 213;
      startB = 41-(input-498)/5.3;
    }
  if((input>666)&&(input<834))
    {
      startR = 251+(input-666)/38;
      startG = 214-(input-666)*1.26;
      startB = 10-(input-666)/18;
    }

  hexcolor = 'rgb('+Math.round(startR)+', '+Math.round(startG)+', '+Math.round(startB)+')';
  return hexcolor;
}

function colorizejsb2w(integer, max)
{
  var input = Math.round(integer / max * 1000);
  var hexcolor;
  var startR = input/3.92;
  var startG = input/3.92;
  var startB = input/3.92;
  
  hexcolor = 'rgb('+Math.round(startR)+', '+Math.round(startG)+', '+Math.round(startB)+')';
  return hexcolor;
}
