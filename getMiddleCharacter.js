function getMiddle(s)
{
  switch (s.length % 2) {
      case 0:    
        return s[(s.length / 2)-1].concat(s[(s.length/2)])
      default: 
        return  s[parseInt(s.length/2)]
	}
}