
int main(void) {
  float salario = (3000 + (3000 * 0.05));
  float beneficio = 28.00;

  float beneficio_total = beneficio * 20;
  float salario_total = salario - beneficio_total;
  printf("\nO novo valor total recebido: %.2f\n", salario_total);

  float pago_horas = salario / (6 * 20);
  printf("\nValor pago por hora de: %.2f\n", pago_horas);
  
  return 0;
}