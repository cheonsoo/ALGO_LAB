import re

def solution( N ):

    binary = "{0:b}".format( N )
    # print "binary : {0}".format( binary )

    regex = re.compile( '10+1' )

    gaps = []
    while regex.search( binary ):
        match = regex.search( binary )
        str = match.group()
        # print str
        gaps.append( len( str ) - 2 )
        binary = binary.replace( str, "11", 1 )

    if len( gaps ) == 0:
        gaps.append( 0 )
    
    gaps.sort( reverse = True )

    return gaps[ 0 ]

result = solution( 2147083640 )
print( "### The largest gap is {0}".format( result ) )