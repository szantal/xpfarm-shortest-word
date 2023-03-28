# xpfarm-shortest-word

## Running the tests

You can run the tests with the following command:
```
npm test
```

If you want to run them in watch mode, use the following:
```
npm test -- --watchAll
```

https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

--------------------------

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

### ✅ US-1: 
As a develeoper I want to find the length of the shortest word from a string of 1 word so that I can solve this Kata

✅ Scenario #1: Given string 'a' When I check the length of the shortest word Then it returns 1
✅ Scenario #2: Given string 'and' When I check the length of the shortest word Then it returns 3
✅ Scenario #3: Given string 'excellent' When I check the length of the shortest word Then it returns 9


### ✅ US-2: 
As a develeoper I want to find the length of the shortest word from a string of 2 words so that I can solve this Kata

✅ Scenario #1: Given string 'one two' When I check the length of the shortest word Then it returns 3
✅ Scenario #2: Given string 'go go' When I check the length of the shortest word Then it returns 2
✅ Scenario #3: Given string 'nine monkeys' When I check the length of the shortest word Then it returns 4

### ✅ US-3: 
As a develeoper I want to find the length of the shortest word from a string of 3 or more words so that I can solve this Kata
✅ Scenario #1: Given string 'Once caught I' When I check the length of the shortest word Then it returns 1
✅ Scenario #2: Given string 'where you go' When I check the length of the shortest word Then it returns 2
✅ Scenario #3: Given string 'Incomprehensibility uncopyRighTable hippopotamus misapprehension underprivilaged unsrupulous' When I check the length of the shortest word Then it returns 11