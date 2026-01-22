<?php

/*
 * **************************************************************************************
 * @tutorial: 
 * **************************************************************************************
 * 
 * Created on APRIL 06, 2019 6:39:36 PM
 *
 * @FileName: ommptbupcrdr.php
 * .php
 * @Author: 
 * @AuthorEmailId:  
 * @ProjectName: omunim
 * @version 2.6.98
 * @Copyright (c) 2019 www.softwaregen.com
 * @All rights reserved
 * Copyright 2019 SoftwareGen, Inc
 *
 * @ModificaionHistory
 * MODIFICATION DATE:
 * AUTHOR: 
 * REASON:
 *
 */
?>
<?php

$currentFileName = basename(__FILE__);
include 'system/omsachsc.php';
require_once 'system/omsgeagb.php';
require_once 'system/omssopin.php';
include_once 'ommpfndv.php';
require_once 'conversions.php';
?>
<?php

$checkColumn = "SHOW COLUMNS FROM `user_transaction_invoice` LIKE 'utin_date_new'";
$resultColumn = mysqli_query($conn, $checkColumn);
if (mysqli_num_rows($resultColumn) == 0) {
// First, add a new temporary column with the DATE type
    $updateUtinTable = "ALTER TABLE user_transaction_invoice ADD COLUMN utin_date_new DATE";
//
    if (!mysqli_query($conn, $updateUtinTable)) {
        die("FileName:ommptbupcrdr.php<br/>Error:" . mysqli_error($conn));
    }
}
//
// Update the new column with the correctly converted dates
$updateUtinTableDate = "UPDATE user_transaction_invoice SET utin_date_new = STR_TO_DATE(utin_date, '%d %b %Y')";
//
if (!mysqli_query($conn, $updateUtinTableDate)) {
    die("FileName:ommptbupcrdr.php<br/>Error:" . mysqli_error($conn));
}
//
// rename the old column and rename the new one
//$updateUtinTableDateColumn = "ALTER TABLE user_transaction_invoice CHANGE COLUMN utin_date utin_date_old VARCHAR";
////
//if (!mysqli_query($conn, $updateUtinTableDateColumn)) {
//    die("FileName:ommptbupcrdr.php<br/>Error:" . mysqli_error($conn));
//}
//
// rename the old column and rename the new one
//$updateUtinTableNewDateColumn = "ALTER TABLE user_transaction_invoice CHANGE COLUMN utin_date_new utin_date DATE";
////
//if (!mysqli_query($conn, $updateUtinTableNewDateColumn)) {
//    die("FileName:ommptbupcrdr.php<br/>Error:" . mysqli_error($conn));
//}
//
//
//
// Assume $conn is your mysqli connection object

/**
 * Checks if a specific index exists on a given table.
 *
 * @param mysqli $conn The active mysqli database connection.
 * @param string $tableName The name of the table to check.
 * @param string $indexName The name of the index to look for.
 * @return bool True if the index exists, false otherwise.
 */
function indexExists(mysqli $conn, string $tableName, string $indexName): bool
{
    // Query to check for the index in the table's metadata
    $sql = "SHOW INDEX FROM `$tableName` WHERE Key_name = '$indexName'";
    $result = mysqli_query($conn, $sql);

    if (!$result) {
        // Handle potential errors with the SHOW INDEX query itself
        die("Error checking index for table `$tableName`: " . mysqli_error($conn));
    }

    // If the query returns one or more rows, the index exists
    return mysqli_num_rows($result) > 0;
}

// --- Now, use the function to create your indexes safely ---

// 1. Index for the main WHERE clause filters
$tableName = 'user_transaction_invoice';
$indexName = 'idx_utin_filters';
if (!indexExists($conn, $tableName, $indexName)) {
    echo "\nCreating index '$indexName' on table '$tableName'...\n";
    $sql = "CREATE INDEX $indexName ON $tableName(utin_owner_id, utin_firm_id, utin_status, utin_transaction_type)";
    if (!mysqli_query($conn, $sql)) {
        die("FileName:ommptbupcrdr.php<br/>Error creating index '$indexName': " . mysqli_error($conn));
    }
    echo "\nIndex '$indexName' created successfully.\n";
} else {
    echo "\nIndex '$indexName' on table '$tableName' already exists. Skipping.\n";
}

// 2. Index for the ORDER BY clause
$tableName = 'user_transaction_invoice';
$indexName = 'idx_utin_date';
if (!indexExists($conn, $tableName, $indexName)) {
    echo "Creating index '$indexName' on table '$tableName'...\n";
    $sql = "CREATE INDEX $indexName ON $tableName(utin_date_new)";
    if (!mysqli_query($conn, $sql)) {
        die("FileName:ommptbupcrdr.php<br/>Error creating index '$indexName': " . mysqli_error($conn));
    }
    echo "\nIndex '$indexName' created successfully.\n";
} else {
    echo "\nIndex '$indexName' on table '$tableName' already exists. Skipping.\n";
}

// 3. Index for the JOIN to the user table
$tableName = 'user';
$indexName = 'idx_user_join';
if (!indexExists($conn, $tableName, $indexName)) {
    echo "Creating index '$indexName' on table '$tableName'...\n";
    $sql = "CREATE INDEX $indexName ON $tableName(user_id, user_owner_id)";
    if (!mysqli_query($conn, $sql)) {
        die("FileName:ommptbupcrdr.php<br/>Error creating index '$indexName': " . mysqli_error($conn));
    }
    echo "\nIndex '$indexName' created successfully.\n";
} else {
    echo "\nIndex '$indexName' on table '$tableName' already exists. Skipping.\n";
}


// 4. Index for the JOIN to the stock_transaction table
$tableName = 'stock_transaction';
$indexName = 'idx_sttr_join';
if (!indexExists($conn, $tableName, $indexName)) {
    echo "Creating index '$indexName' on table '$tableName'...\n";
    $sql = "CREATE INDEX $indexName ON $tableName(sttr_utin_id)";
    if (!mysqli_query($conn, $sql)) {
        die("FileName:ommptbupcrdr.php<br/>Error creating index '$indexName': " . mysqli_error($conn));
    }
    echo "\nIndex '$indexName' created successfully.\n";
} else {
    echo "\nIndex '$indexName' on table '$tableName' already exists. Skipping.\n";
}

echo "\nAll index checks complete.\n";

?>