var jogador = 0;
const tabuleiro = [null];
$('.campo-single').click(function(){
  var icone = $(this).find("i");
    if(jogador == 0){
      // X
       if($(this).attr('content') == ""){
         $(this).attr('content','x');
         icone.addClass('fa-solid').addClass('fa-x');
         jogador = 1;
       }
      
    }else if(jogador == 1){
      // O
      if($(this).attr('content') == ''){
        $(this).attr('content','o');
        icone.addClass('fa-regular').addClass('fa-circle');
         jogador = 0;  
      }
    } verificarVencedor($(this).attr('position'),$(this).attr('content'));
})

$('.reiniciar').click(function(){
  $('i').removeClass();
  $('[content]').attr('content',"");
  jogador = 0;
  for(let i = 0; i < tabuleiro.length; i++){
      tabuleiro[i] = null;
  }
  $('.overlay-vencedor').hide();
})

function verificarVencedor(position, val){
  tabuleiro[position] = val;
  var fim;
  var vencedor;
  
  if(tabuleiro[0] == 'x' && tabuleiro[1] == 'x' && tabuleiro[2] == 'x')
    vencedor = "X";
  if(tabuleiro[3] == 'x' && tabuleiro[4] == 'x' && tabuleiro[5] == 'x')
    vencedor = "X";
  if(tabuleiro[6] == 'x' && tabuleiro[7] == 'x' && tabuleiro[8] == 'x')
    vencedor = "X";
  if(tabuleiro[0] == 'x' && tabuleiro[3] == 'x' && tabuleiro[6] == 'x')
    vencedor = "X";
  if(tabuleiro[1] == 'x' && tabuleiro[4] == 'x' && tabuleiro[7] == 'x')
    vencedor = "X";
  if(tabuleiro[2] == 'x' && tabuleiro[5] == 'x' && tabuleiro[8] == 'x')
    vencedor = "X";
  if(tabuleiro[0] == 'x' && tabuleiro[4] == 'x' && tabuleiro[8] == 'x')
    vencedor = "X";
  if(tabuleiro[2] == 'x' && tabuleiro[4] == 'x' && tabuleiro[6] == 'x')
    vencedor = "X";
  
  if(tabuleiro[0] == 'o' && tabuleiro[1] == 'o' && tabuleiro[2] == 'o')
    vencedor = "O";
  if(tabuleiro[3] == 'o' && tabuleiro[4] == 'o' && tabuleiro[5] == 'o')
    vencedor = "O";
  if(tabuleiro[6] == 'o' && tabuleiro[7] == 'o' && tabuleiro[8] == 'o')
    vencedor = "O";
  if(tabuleiro[0] == 'o' && tabuleiro[3] == 'o' && tabuleiro[6] == 'o')
    vencedor = "O";
  if(tabuleiro[1] == 'o' && tabuleiro[4] == 'o' && tabuleiro[7] == 'o')
    vencedor = "O";
  if(tabuleiro[2] == 'o' && tabuleiro[5] == 'o' && tabuleiro[8] == 'o')
    vencedor = "O";
  if(tabuleiro[0] == 'o' && tabuleiro[4] == 'o' && tabuleiro[8] == 'o')
    vencedor = "O";
  if(tabuleiro[2] == 'o' && tabuleiro[4] == 'o' && tabuleiro[6] == 'o')
    vencedor = "O";
  
  /* Verificar fim do tabuleiro */
  if(tabuleiro.length == 9){
    fim = true;
    for(let i = 0; i < 9; i++){
      if(tabuleiro[i] == null)
        fim = false;
    }
  }
  
  if(vencedor){
    $('.overlay-vencedor span').html("O vencedor foi "+ vencedor);
    $('.overlay-vencedor').show();
  }else if(fim){
    $('.overlay-vencedor span').html("Não houve vencedor nessa rodada");
    $('.overlay-vencedor').show();
  }
     
 /*                      */
  
}