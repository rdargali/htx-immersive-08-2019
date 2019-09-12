'''
player_x = input('Player 1 please enter your name ')
player_o = input('Player 2 please enter your name ')

print(f'{player_x} will be X and {player_o} will be O')

'''
gameboard = [[1,2,3],
         [4,5,6],
         [7,8,9]]

gameboard.insert([0][0], 'X')
print(gameboard) 



def tic_tac_toe_board(player = 0, row = 0, column = 0):  
    gameboard[row][column] = player
    rowcount = 0
    print('   0  1  2')  
    for row in gameboard:
        print(rowcount, row)
        rowcount += 1


def x_move():
    input(f'{player_x}(X), place your move (1-9)') = move 
    if move = 1 then gameboard.insert([00], x)
        



