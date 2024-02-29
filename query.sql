-- version#1 SQL query to fetch Top 10 customers where offer type is Staff
SELECT customer_first_name , customer_last_name , customer_email
FROM magento_offer 
where offer_type = 'Staff'
Limit 10



-- version#2 SQL query to fetch Top 10 customers where offer type is Staff and also order on customer first name
SELECT customer_first_name , customer_last_name , customer_email
FROM magento_offer 
where offer_type = 'Staff'
ORDER by customer_first_name
Limit 10
