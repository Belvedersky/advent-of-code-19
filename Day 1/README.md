## [День 1: Реактивное топливо](https://adventofcode.com/2019/day/1)

Эльфы быстро загружают вас в космический корабль и готовятся к запуску.

При первом опросе Go / No Go каждый Эльф идет до тех пор, пока счетчик топлива не станет верхним. Они еще не определили необходимое количество топлива.

Топливо, необходимое для запуска данного модуля, зависит от его массы. В частности, чтобы найти топливо, необходимое для модуля, возьмите его массу, разделите на три, округлите и вычтите 2

Пример

Для массы 12, разделить на 3 и округлить вниз, чтобы получить 4, а затем вычесть 2, чтобы получить 2.

Для массы 14 деление на 3 и округление вниз все равно дает 4, поэтому необходимое топливо также равно 2.

Для массы 1969 года требуется топливо 654.

Для массы 100756 требуется топливо 33583.

Счетчик топлива должен знать общую потребность в топливе. Чтобы найти его, индивидуально рассчитать топливо, необходимое для массы каждого модуля (ваш вход головоломки), а затем сложить все значения топлива.

Какова сумма потребностей в топливе для всех модулей вашего космического корабля?

[ввод](Day 1/input.txt) 

--- Часть 2 ---

During the second Go / No Go poll, the Elf in charge of the Rocket Equation Double-Checker stops the launch sequence. Apparently, you forgot to include additional fuel for the fuel you just added.

Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and subtract 2. However, that fuel also requires fuel, and that fuel requires fuel, and so on. Any mass that would require negative fuel should instead be treated as if it requires zero fuel; the remaining mass, if any, is instead handled by wishing really hard, which has no mass and is outside the scope of this calculation.

So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative. For example:

A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.
What is the sum of the fuel requirements for all of the modules on your spacecraft when also taking into account the mass of the added fuel? (Calculate the fuel requirements for each module separately, then add them all up at the end.)